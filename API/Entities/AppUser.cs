﻿using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace API.Entities;
public class AppUser
{
    public int Id { get; set; }

    
    public string UserName { get; set;}

    public byte[] PasswordHash {get; set;}

    public byte[] PasswordSalt { get; set; }

}
