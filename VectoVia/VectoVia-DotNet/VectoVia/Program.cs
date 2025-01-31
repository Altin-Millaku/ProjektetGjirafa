using VectoVia.Models.Cars.Services;
using VectoVia.Models.KompaniaRents;
using VectoVia.Models.TaxiCars.Services;
using VectoVia.Models.TaxiCars;
using VectoVia.Models.Users.Services;
using VectoVia.Models.Users;
using Microsoft.EntityFrameworkCore;
using VectoVia.Models.KompaniaRents.Services;
using vectovia.Models.PickUpLocations.Services;
using vectovia.Models.PickUpLocations;
using VectoVia.Data;
using VectoVia.Models.KompaniaTaksive;
using VectoVia.Models.KompaniaTaksive.Services;

using vectovia.Models.Cars;
using vectovia.Models.Cars.Services;

using Microsoft.Extensions.DependencyInjection;
using System.Text.Json.Serialization;
using vectovia.Models.Qytet.Services;



var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();

builder.Services.AddDbContext<UsersDbContext>(options => options.UseSqlServer(

    builder.Configuration.GetConnectionString("database")
));

builder.Services.AddDbContext<CarsDbContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("database")
));

builder.Services.AddDbContext<KompaniaTaxiDbContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("database")
));

builder.Services.AddDbContext<QytetiDbContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("database")
));

builder.Services.AddDbContext<TaxiCarsDbContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("database")
));

builder.Services.AddDbContext<KompaniaRentDbContext>(options => options.UseSqlServer(
    builder.Configuration.GetConnectionString("database")
));


builder.Services.AddControllers()
    .AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
    });


builder.Services.AddTransient<UserServices>();
builder.Services.AddTransient<PickUpLocationServices>();
builder.Services.AddTransient<CarServices>();
builder.Services.AddTransient<TaxiCarServices>();
builder.Services.AddTransient<KompaniaRentServices>();
builder.Services.AddTransient<KompaniaTaxiServices>();
builder.Services.AddTransient<QytetServices>();

builder.Services.AddTransient<MarkaServices>();

builder.Services.AddTransient<RoleServices>();

byte[] secretKey = SecretKeyGenerator.GenerateSecretKey();
builder.Services.AddScoped<JwtService>(serviceProvider => new JwtService(secretKey));


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure CORS
app.UseCors(options => options.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader());

app.MapControllers();
app.UseSwagger();
app.UseSwaggerUI();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.Run();
