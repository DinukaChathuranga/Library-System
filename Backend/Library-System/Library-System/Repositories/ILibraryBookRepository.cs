﻿using System.Collections.Generic;
using System.Threading.Tasks;
using Library_System.Models;

namespace Library_System.Repositories
{
    public interface ILibraryBookRepository
    {
        Task<List<LibraryBook>> GetAllAsync();
        Task<LibraryBook> GetByIdAsync(int id);
        Task<List<LibraryBook>> GetByOwnerAsync(int? ownerId);
        Task<LibraryBook> CreateAsync(LibraryBook book);
        Task<LibraryBook> UpdateAsync(int id, LibraryBook book);
        Task DeleteAsync(int libraryBookId);
        Task<LibraryBook> UpdateAsync(LibraryBook book);
    }
}
