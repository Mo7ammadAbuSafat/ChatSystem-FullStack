namespace BusinessLayer.Exceptions
{
    public class NotFoundException : Exception
    {
        public NotFoundException(string massege) : base(massege) { }
    }
}
