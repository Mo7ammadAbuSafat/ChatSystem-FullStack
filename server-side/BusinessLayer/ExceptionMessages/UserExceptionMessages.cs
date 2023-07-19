namespace BusinessLayer.ExceptionMessages
{
    public static class UserExceptionMessages
    {
        public const string NotFoundUserById = "no user with this id";

        public const string NotFoundUserByUsername = "no user with this username";

        public const string UsernameAlreadyExsist = "this username is already exist";

        public const string IncorrectPassword = "password is not correct";

        public const string AlreadyHaveProfilePicture = "user already have profile picture";

        public const string DoNotHaveProfilePicture = "user don't have profile picture";
    }
}
