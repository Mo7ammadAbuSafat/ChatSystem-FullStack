using BusinessLayer.Services.UserService.Implementations;
using BusinessLayer.Services.UserService.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using PersistenceLayer.DbContexts;
using PersistenceLayer.Repositories.Implementations;
using PersistenceLayer.Repositories.Interfaces;
using PresentationLayer;
using Swashbuckle.AspNetCore.Filters;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

//UserServices
builder.Services.AddScoped<IUserAccountService, UserAccountService>();
builder.Services.AddScoped<IAuthenticatedUserService, AuthenticatedUserService>();

//Repositories
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<IUnitOfWork, UnitOfWork>();


builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("oauth2", new OpenApiSecurityScheme
    {
        Description = "Standard Authorization header using the Bearer scheme (\"bearer {token}\")",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Type = SecuritySchemeType.ApiKey
    });

    options.OperationFilter<SecurityRequirementsOperationFilter>();

    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "Chat API",
        Description = "An ASP.NET Core Web API for managing Chat website",
        Contact = new OpenApiContact
        {
            Name = "Mohammad Abu-Safat",
            Url = new Uri("https://www.linkedin.com/in/mohammad-abusafat/")
        },
    });
});

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ChatContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddHttpClient();
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddTransient<GlobalExceptionHandlingMiddleware>();


builder.Services.AddHttpContextAccessor();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8
                .GetBytes(builder.Configuration.GetSection("AppSettings:TokenKey").Value)),
            ValidateIssuer = false,
            ValidateAudience = false
        };
    });

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseMiddleware<GlobalExceptionHandlingMiddleware>();

app.UseAuthorization();

app.MapControllers();

app.Run();
