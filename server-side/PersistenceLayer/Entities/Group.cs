namespace PersistenceLayer.Entities
{
    public class Group
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public DateTime CreationDate { get; set; }
        public int OwnerId { get; set; }
        public User Owner { get; set; }
        public ICollection<User> Members { get; set; }
        public ICollection<GroupMessage> Messages { get; set; }
    }
}
