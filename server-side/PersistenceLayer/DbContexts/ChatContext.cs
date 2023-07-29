using Microsoft.EntityFrameworkCore;
using PersistenceLayer.Entities;

namespace PersistenceLayer.DbContexts
{
    public class ChatContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<PrivateMessage> PrivateMessages { get; set; }
        public DbSet<Image> Images { get; set; }

        public ChatContext(DbContextOptions<ChatContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PrivateMessage>()
                    .HasOne(s => s.Sender)
                    .WithMany(g => g.SendedPrivateMessages)
                    .HasForeignKey(s => s.SenderId)
                    .OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<PrivateMessage>()
                    .HasOne(s => s.Receiver)
                    .WithMany(g => g.ReceivedPrivateMessages)
                    .HasForeignKey(s => s.ReceiverId)
                    .OnDelete(DeleteBehavior.Restrict);


            modelBuilder.Entity<User>().Property(u => u.ImageId).IsRequired(false);
            modelBuilder.Entity<User>().Property(u => u.IsDarkTheme).HasDefaultValue(false);
            modelBuilder.Entity<User>().HasIndex(u => u.Username).IsUnique();

        }
    }
}
