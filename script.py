from bs4 import BeautifulSoup

# Ruta al archivo HTML que quieres modificar
ruta_archivo_html = 'wiplas.html'

# Leer el contenido del archivo HTML
with open(ruta_archivo_html, 'r', encoding='utf-8') as archivo:
    html_doc = archivo.read()

soup = BeautifulSoup(html_doc, 'html.parser')

# Buscar todos los elementos que tienen una clase
for element in soup.find_all(class_=True):
    # Agregar la clase 'animate'
    classes = element.get('class')
    if 'animate' not in classes:
        classes.append('animate')
    element['class'] = classes

# Guardar los cambios en el archivo HTML
with open(ruta_archivo_html, 'w', encoding='utf-8') as archivo:
    archivo.write(str(soup))

