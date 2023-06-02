﻿using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace Bootcamp.Study.Buddy.Project.Models;

public partial class StudentBootCampDbContext : DbContext
{
    public StudentBootCampDbContext()
    {
    }

    public StudentBootCampDbContext(DbContextOptions<StudentBootCampDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Favorite> Favorites { get; set; }

    public virtual DbSet<Question> Questions { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer(" Data Source=423Z1F3\\SQLEXPRESS;Initial Catalog= StudentBootCampDB;Integrated Security=True; Encrypt=False");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Favorite>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Favorite__3214EC07BE325C89");

            entity.Property(e => e.Id).ValueGeneratedNever();
        });

        modelBuilder.Entity<Question>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Question__3214EC0780D2FE54");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Answer).HasMaxLength(200);
            entity.Property(e => e.QuestionTitle).HasMaxLength(100);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
