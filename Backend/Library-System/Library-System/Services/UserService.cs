using Library_System.Models;
using Library_System.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Library_System.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task<User> RegisterUserAsync(User user)
        {
            return await _userRepository.CreateUserAsync(user);
        }

        public async Task<User> LoginUserAsync(string email, string password)
        {
            var user = await _userRepository.GetUserByEmailAsync(email);
            if (user == null || user.Password != password)
            {
                return null;
            }

            return user;
        }
    }
}
