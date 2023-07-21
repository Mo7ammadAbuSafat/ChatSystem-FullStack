using PersistenceLayer.Entities;

namespace PersistenceLayer.RetrievalModels
{
    public class ChatWithLastMessage
    {
        public User User { get; set; }
        public PrivateMessage LastMessage { get; set; }
    }
}
