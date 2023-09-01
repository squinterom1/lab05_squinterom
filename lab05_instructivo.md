# Administración IBM i  - Lab05

## Objetivo
Se desea habilitar una pagina web donde se puedan observar algunos datos de monitoreo esenciales
de la plataforma IBM i.

De manera autonoma se produciran algunos archivos en formato .html que podran ser seleccionados por el analista.

### 1. Inicializar git en su PC
1. Si usa windows, asegurese de tener gitbash instalado en su PC.
2. Abra una sesion de gitbash en su PC local y ejecute los comandos de inicializacion y configuracion de git.
- `mkdir MyApps` (ej. MyApps en su directorio home ~)
- `cd MyApps`
- `git config --global user.name "su nombre y apellido"`
- `git config --global user.email su_correo@electronico`
- `git config --global core.editor "code --wait"` (Asumiendo que ha instalado VSCode)
- `git config --global core.autocrlf true` (solo si utiliza windows en su PC)

### 2. Configurar su entorno SSH en IBM i
1. Abra una sesion SSH en IBM i desde gitbash o putty o terminal
- `ssh labuserXX@hostname`
- Asegurese de estar en /home/labuserXX (en caso que no a tal directorio, creelo)
2. Creacion del archivo .profile
- Ejecute el comando `git --version` (Si obtiene respuesta ej: git version 2.39.3  pase al punto 3, de lo contrario complete este paso)
- Verifique si ya tiene el archivo .profile en su directorio /home/labuserXX. de lo contrario creelo con `touch .profile`
- Consulte el archivo con `cat .profile` y valide si contiene esta instrucción :
`PATH=$PATH:/QOpenSys/pkgs/bin`
- En caso de que no este, addicionela con `echo 'PATH=$PATH:/QOpenSys/usr/bin' >>.profile`
- Cierre la session ssh y reingrese nuevamente. En esta ocasión el comando `git --version` deberia generar la salida esperada.

### 3. Crear un fork del proyecto y clonar
1. Visite la pagina web del lab https://github.com/obustos/ibmi_adm_lab05
2. Navegue por el proyecto y lea el readme.md
3. Pulse el boton de fork y cree uno nuevo llamado Lab05_labuserXX. Esto le permitira tener su propio proyecto en gitHub. Si no tiene cuenta en github cree una suministrando los datos solicitados.
4. Pulse el boton [<> Code] pestaña HTTPS y copie la ruta URL que alli aparece
5. con gitbash o VSCode abra el directorio MyApps creado anteriormente y ejecute el comando `git clone ruta-url-copiada-en-el-punto-4` o mediante la navegacio git en vscode.
6. Valide que el proyecto se copio satisfactoriamente a su PC, deberia ahora tener un directorio dentro de MyApps.

### 4. Modificar archivos en su PC
1. Asegurese de tener los archivos tabla.html, memoria.html generados de Lab04
2. Realice las personalizaciones con los nombres de archivos a presentar en main.html 
3. Luego de hacer los cambios llevelos al area stage `git add archivo` o use el icono + en la perspectiva de git en vscode
4. Luego de hacer todos los cambios realice un commit con mensaje 'Carga inicial' `git commit -m "mensaje"`
5. sincronice su rama main con github. ello lo puede hacer con `git push` o con el icono de sincronizacion en vscode.
6. Vaya a la pagina web de su repo en github y verifique que el cambio está reflejado.

### 5. Clonar su repo personalizado en IBM i
1. Sincronice la carpeta de su proyecto con IBM i en la ruta /www/LabuserXX/htdocs
   para ello debe ingresar a IBM i via ssh y ubicarse en la ruta indicada
- ejecute el comando `git clone url-de-su-repo-recien-creado`
2. verifique que los cambios llegaron 
2. Abra una pestaña en su navegador web y compurebe el funcionamiento cargando el archivo main.html en su servidor Http:   ej: https://hostname:1005x/main.html

