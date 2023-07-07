namespace PersistenceLayer.Entities
{
    public class GroupMessage : Message
    {
        public int GroupId { get; set; }
        public Group Group { get; set; }
    }
}
