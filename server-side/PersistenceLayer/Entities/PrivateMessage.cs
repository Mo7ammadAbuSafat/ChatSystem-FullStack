namespace PersistenceLayer.Entities
{
    public class PrivateMessage : Message
    {
        public int ReceiverId { get; set; }
        public User Receiver { get; set; }
    }
}
