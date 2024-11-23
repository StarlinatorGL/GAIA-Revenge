# Etapa de construcción con el SDK de .NET
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copiar los archivos necesarios
COPY ./GAIA_Revenge/GAIA_Revenge.csproj ./GAIA_Revenge/
COPY ./GAIA_Revenge/ ./GAIA_Revenge/

# Restaurar dependencias
RUN dotnet restore ./GAIA_Revenge/GAIA_Revenge.csproj

# Publicar la aplicación (para Blazor WebAssembly)
RUN dotnet publish ./GAIA_Revenge/GAIA_Revenge.csproj -c Release -o /app/publish

# Etapa de ejecución (Usando Nginx para servir Blazor WebAssembly)
FROM nginx:alpine
COPY --from=build /app/publish/wwwroot /usr/share/nginx/html




