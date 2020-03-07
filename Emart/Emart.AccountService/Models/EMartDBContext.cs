using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Emart.AccountService.Models
{
    public partial class EMartDBContext : DbContext
    {
        public EMartDBContext()
        {
        }

        public EMartDBContext(DbContextOptions<EMartDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Buyer> Buyer { get; set; }
        public virtual DbSet<Cart> Cart { get; set; }
        public virtual DbSet<Category> Category { get; set; }
        public virtual DbSet<Items> Items { get; set; }
        public virtual DbSet<PurchaseHistory> PurchaseHistory { get; set; }
        public virtual DbSet<Seller> Seller { get; set; }
        public virtual DbSet<SubCategory> SubCategory { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Data Source=DESKTOP-A63MUHA\\SQLEXPRESS;Initial Catalog=EMartDB;User ID=sa;Password=pass@word1");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Buyer>(entity =>
            {
                entity.HasIndex(e => e.Emailid)
                    .HasName("UQ__Buyer__8734520BD3FFBB5C")
                    .IsUnique();

                entity.HasIndex(e => e.Username)
                    .HasName("UQ__Buyer__F3DBC5726DA4792E")
                    .IsUnique();

                entity.Property(e => e.BuyerId)
                    .HasColumnName("buyerId")
                    .ValueGeneratedNever();

                entity.Property(e => e.CreateDateTime)
                    .HasColumnName("createDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Emailid)
                    .IsRequired()
                    .HasColumnName("emailid")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Mobile)
                    .HasColumnName("mobile")
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.Pwd)
                    .IsRequired()
                    .HasColumnName("pwd")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Cart>(entity =>
            {
                entity.Property(e => e.Cartid)
                    .HasColumnName("cartid")
                    .ValueGeneratedNever();

                entity.Property(e => e.BuyerId).HasColumnName("buyerId");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Image)
                    .HasColumnName("image")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.ItemId).HasColumnName("itemId");

                entity.Property(e => e.Itemname)
                    .HasColumnName("itemname")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK__Cart__buyerId__5165187F");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.Cart)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("FK__Cart__itemId__52593CB8");
            });

            modelBuilder.Entity<Category>(entity =>
            {
                entity.HasIndex(e => e.CategoryName)
                    .HasName("UQ__Category__37077ABD549F37C9")
                    .IsUnique();

                entity.Property(e => e.CategoryId)
                    .HasColumnName("categoryId")
                    .ValueGeneratedNever();

                entity.Property(e => e.CategoryDetails)
                    .HasColumnName("categoryDetails")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasColumnName("categoryName")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Items>(entity =>
            {
                entity.HasKey(e => e.ItemId)
                    .HasName("PK__Items__56A128AA69A35754");

                entity.Property(e => e.ItemId)
                    .HasColumnName("itemId")
                    .ValueGeneratedNever();

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Image)
                    .IsRequired()
                    .HasColumnName("image")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.ItemDescription)
                    .HasColumnName("itemDescription")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.ItemName)
                    .IsRequired()
                    .HasColumnName("itemName")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Price).HasColumnName("price");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId).HasColumnName("sellerId");

                entity.Property(e => e.Stock).HasColumnName("stock");

                entity.Property(e => e.SubCategoryId).HasColumnName("subCategoryId");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__Items__categoryI__36B12243");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__Items__sellerId__38996AB5");

                entity.HasOne(d => d.SubCategory)
                    .WithMany(p => p.Items)
                    .HasForeignKey(d => d.SubCategoryId)
                    .HasConstraintName("FK__Items__subCatego__37A5467C");
            });

            modelBuilder.Entity<PurchaseHistory>(entity =>
            {
                entity.HasKey(e => e.PurchaseId)
                    .HasName("PK__Purchase__0261226C6ACFC22C");

                entity.Property(e => e.PurchaseId)
                    .HasColumnName("purchaseId")
                    .ValueGeneratedNever();

                entity.Property(e => e.BuyerId).HasColumnName("buyerId");

                entity.Property(e => e.ItemId).HasColumnName("itemId");

                entity.Property(e => e.NoOfItems).HasColumnName("noOfItems");

                entity.Property(e => e.Remarks)
                    .HasColumnName("remarks")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SellerId).HasColumnName("sellerId");

                entity.Property(e => e.TranscationTime)
                    .HasColumnName("transcationTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.TranscationType)
                    .IsRequired()
                    .HasColumnName("transcationType")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Transcationstatus)
                    .IsRequired()
                    .HasColumnName("transcationstatus")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Buyer)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.BuyerId)
                    .HasConstraintName("FK__PurchaseH__buyer__403A8C7D");

                entity.HasOne(d => d.Item)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.ItemId)
                    .HasConstraintName("FK__PurchaseH__itemI__4222D4EF");

                entity.HasOne(d => d.Seller)
                    .WithMany(p => p.PurchaseHistory)
                    .HasForeignKey(d => d.SellerId)
                    .HasConstraintName("FK__PurchaseH__selle__412EB0B6");
            });

            modelBuilder.Entity<Seller>(entity =>
            {
                entity.HasIndex(e => e.EmailId)
                    .HasName("UQ__Seller__87355E73D6B9A8A4")
                    .IsUnique();

                entity.HasIndex(e => e.Sellername)
                    .HasName("UQ__Seller__9612B7F419590609")
                    .IsUnique();

                entity.Property(e => e.SellerId)
                    .HasColumnName("sellerId")
                    .ValueGeneratedNever();

                entity.Property(e => e.Aboutcompany)
                    .HasColumnName("aboutcompany")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Companyname)
                    .IsRequired()
                    .HasColumnName("companyname")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.EmailId)
                    .IsRequired()
                    .HasColumnName("emailId")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.Gstin)
                    .IsRequired()
                    .HasColumnName("GSTIN")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Mobile)
                    .HasColumnName("mobile")
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.PostalAddress)
                    .HasColumnName("postalAddress")
                    .HasMaxLength(300)
                    .IsUnicode(false);

                entity.Property(e => e.Pwd)
                    .IsRequired()
                    .HasColumnName("pwd")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Sellername)
                    .IsRequired()
                    .HasColumnName("sellername")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Website)
                    .IsRequired()
                    .HasColumnName("website")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<SubCategory>(entity =>
            {
                entity.HasIndex(e => e.SubCategoryName)
                    .HasName("UQ__SubCateg__A24748341F80F461")
                    .IsUnique();

                entity.Property(e => e.SubCategoryId)
                    .HasColumnName("subCategoryId")
                    .ValueGeneratedNever();

                entity.Property(e => e.CategoryId).HasColumnName("categoryId");

                entity.Property(e => e.Gst).HasColumnName("GST");

                entity.Property(e => e.SubCategoryDetails)
                    .HasColumnName("subCategoryDetails")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.SubCategoryName)
                    .IsRequired()
                    .HasColumnName("subCategoryName")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.SubCategory)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK__SubCatego__categ__1BFD2C07");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
