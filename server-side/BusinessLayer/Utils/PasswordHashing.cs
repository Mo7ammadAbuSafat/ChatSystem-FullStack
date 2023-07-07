using System.Security.Cryptography;
using System.Text;

namespace BusinessLayer.Utils
{
    public static class PasswordHashing
    {
        public static void HashPassword(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            var hmac = new HMACSHA512();
            passwordSalt = hmac.Key;
            passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
        }

        public static bool VerifyPassword(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            var hmac = new HMACSHA512(passwordSalt);
            var CommingPasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            return CommingPasswordHash.SequenceEqual(passwordHash);
        }
    }
}
