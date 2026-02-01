import pandas as pd
import matplotlib.pyplot as plt

def analizar_notas():
    try:
        # Cargar datos
        df = pd.read_csv('notas.csv')
        
        # Cálculos de Promedio y Porcentaje
        df['Promedio'] = (df['NotaPrimerBimestre'] + df['NotaSegundoBimestre']) / 2
        df['Porcentaje'] = (df['NotaTotal'] / 20) * 100
        
        print("--- RESULTADOS ---")
        print(df[['NombreApellido', 'Promedio', 'Porcentaje']].head())
        print("..." + str(len(df)) + " filas en total\n")
        
        # Estadísticas
        total_mean = df['NotaTotal'].mean()
        total_median = df['NotaTotal'].median()
        total_mode = df['NotaTotal'].mode()[0]
        
        print(f"Media (Nota Total): {total_mean:.2f}")
        print(f"Mediana (Nota Total): {total_median:.2f}")
        print(f"Moda (Nota Total): {total_mode:.2f}")
        
        # Extremos
        print(f"\nNota más alta 1er Bim: {df['NotaPrimerBimestre'].max()}")
        print(f"Nota más alta 2do Bim: {df['NotaSegundoBimestre'].max()}")
        print(f"Nota más baja 1er Bim: {df['NotaPrimerBimestre'].min()}")
        print(f"Nota más baja 2do Bim: {df['NotaSegundoBimestre'].min()}")
        print(f"Nota más alta Total: {df['NotaTotal'].max()}")
        print(f"Nota más baja Total: {df['NotaTotal'].min()}")
        
        # Análisis de Sentimiento (Básico por palabras clave)
        def clasificar_sentimiento(comentario):
            comentario = comentario.lower()
            if any(w in comentario for in ['excelente', 'encantó', 'perfecto']):
                return 'Excelente'
            elif any(w in comentario for in ['muy buena', 'aprendí mucho', 'bastante']):
                return 'Muy Bueno'
            elif any(w in comentario for in ['buena', 'gustó', 'agradó']):
                return 'Bueno'
            elif any(w in comentario for in ['normal', 'regular', 'neutral']):
                return 'Normal'
            elif any(w in comentario for in ['malo', 'aburrida']):
                return 'Malo'
            elif any(w in comentario for in ['pésimo', 'horrible']):
                return 'Pésimo'
            else:
                return 'Neutral'

        df['Sentimiento'] = df['ComentarioEstudiante'].apply(clasificar_sentimiento)
        
        conteo_sentimientos = df['Sentimiento'].value_counts()
        print("\nDistribución de Sentimientos:")
        print(conteo_sentimientos)
        
        # Gráfico Pastel
        plt.figure(figsize=(10, 6))
        plt.pie(conteo_sentimientos, labels=conteo_sentimientos.index, autopct='%1.1f%%', startangle=140)
        plt.title('Distribución de Sentimientos de Estudiantes')
        plt.axis('equal')
        plt.savefig('sentimientos.png')
        print("\nGráfico guardado como 'sentimientos.png'")
        
    except FileNotFoundError:
        print("Error: No se encontró el archivo 'notas.csv'")
    except Exception as e:
        print(f"Ocurrió un error: {e}")

if __name__ == "__main__":
    analizar_notas()
