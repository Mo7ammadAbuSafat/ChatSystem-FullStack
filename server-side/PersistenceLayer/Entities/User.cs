namespace PersistenceLayer.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public byte[] PasswordHash { get; set; } = new byte[32];
        public byte[] PasswordSalt { get; set; } = new byte[32];
        public int? ImageId { get; set; }
        public Image Image { get; set; }
        public ICollection<Group> Groups { get; set; }
        public ICollection<Group> OwnedGroups { get; set; }
        public ICollection<GroupMessage> SendedGroupMessages { get; set; }
        public ICollection<PrivateMessage> SendedPrivateMessages { get; set; }
        public ICollection<PrivateMessage> ReceivedPrivateMessages { get; set; }
    }
}
