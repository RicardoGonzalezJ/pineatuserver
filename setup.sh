# esto es para instalar nodejs, paqutes npm, express-generator y postgresql en unbuntu
# Actualizando el sistema
sudo apt-get update && sudo apt-get upgrade

# Instalando nodejs
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

#instalando paquete de lenguaje
sudo apt-get install language-pack-UTF-8

# Instalando paquetes esenciales para compilar ciertos paquetes NPM
sudo apt-get install -y build-essential

# Instalando express-generator
npm install express-generator -g

# Instalando postgreqsl
sudo apt-get install postgresql postgresql-contrib

# Copiando el archivo de configuración para que no de problemas
# con al tratar de conectarse desde afuera del usuario psql.
# sudo cp /vagrant/config/pg_hba.conf /etc/postgresql/9.5/main/pg_hba.conf
# sudo /etc/init.d/postgresql restart

# Creando base de datos
# psql -U postgres -c "CREATE USER express WITH ENCRYPTED PASSWORD 'password';"
# psql -U postgres -c "CREATE DATABASE presupuesoft;"
# psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE presupuesoft TO express;"
