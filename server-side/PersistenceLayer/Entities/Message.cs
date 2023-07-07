namespace PersistenceLayer.Entities
{
    public abstract class Message
    {
        public int Id { get; set; }
        public string TextBody { get; set; }
        public DateTime CreationDate { get; set; }
        public int SenderId { get; set; }
        public User Sender { get; set; }
    }
}
