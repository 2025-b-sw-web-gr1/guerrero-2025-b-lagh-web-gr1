import tkinter as tk
from tkinter import messagebox
import math

class Calculator:
    def __init__(self, root):
        self.root = root
        self.root.title("Calculadora Interactiva")
        self.root.geometry("400x500")
        
        self.expression = ""
        self.input_text = tk.StringVar()
        
        # Display Screen
        input_frame = self.create_display()
        input_frame.pack(side=tk.TOP)
        
        # Buttons
        btns_frame = self.create_buttons()
        btns_frame.pack()

    def create_display(self):
        frame = tk.Frame(self.root, width=312, height=50, bd=0, highlightbackground="black", highlightcolor="black", highlightthickness=1)
        frame.pack(side=tk.TOP)
        input_field = tk.Entry(frame, font=('arial', 18, 'bold'), textvariable=self.input_text, width=50, bg="#eee", bd=0, justify=tk.RIGHT)
        input_field.grid(row=0, column=0)
        input_field.pack(ipady=10)
        return frame

    def create_buttons(self):
        frame = tk.Frame(self.root, width=312, height=322.5, bg="grey")
        
        # Row 1
        self.create_btn(frame, "C", 1, 0, 3, lambda: self.btn_clear(), "#ffcccc")
        self.create_btn(frame, "/", 1, 3, 1, lambda: self.btn_click("/"))

        # Row 2
        self.create_btn(frame, "7", 2, 0, 1, lambda: self.btn_click(7))
        self.create_btn(frame, "8", 2, 1, 1, lambda: self.btn_click(8))
        self.create_btn(frame, "9", 2, 2, 1, lambda: self.btn_click(9))
        self.create_btn(frame, "*", 2, 3, 1, lambda: self.btn_click("*"))

        # Row 3
        self.create_btn(frame, "4", 3, 0, 1, lambda: self.btn_click(4))
        self.create_btn(frame, "5", 3, 1, 1, lambda: self.btn_click(5))
        self.create_btn(frame, "6", 3, 2, 1, lambda: self.btn_click(6))
        self.create_btn(frame, "-", 3, 3, 1, lambda: self.btn_click("-"))

        # Row 4
        self.create_btn(frame, "1", 4, 0, 1, lambda: self.btn_click(1))
        self.create_btn(frame, "2", 4, 1, 1, lambda: self.btn_click(2))
        self.create_btn(frame, "3", 4, 2, 1, lambda: self.btn_click(3))
        self.create_btn(frame, "+", 4, 3, 1, lambda: self.btn_click("+"))

        # Row 5
        self.create_btn(frame, "0", 5, 0, 2, lambda: self.btn_click(0))
        self.create_btn(frame, ".", 5, 2, 1, lambda: self.btn_click("."))
        self.create_btn(frame, "=", 5, 3, 1, lambda: self.btn_equal())
        
        # Row 6 (Extra Operation)
        self.create_btn(frame, "√", 6, 0, 4, lambda: self.btn_sqrt(), "#ccffcc")

        return frame

    def create_btn(self, frame, text, row, col, colspan, command, bg="white"):
        tk.Button(frame, text=text, fg="black", width=10*colspan, height=3, bd=0, bg=bg, cursor="hand2", command=command).grid(row=row, column=col, padx=1, pady=1, sticky="nsew", columnspan=colspan)

    def btn_click(self, item):
        self.expression = self.expression + str(item)
        self.input_text.set(self.expression)

    def btn_clear(self):
        self.expression = ""
        self.input_text.set("")

    def btn_equal(self):
        try:
            result = str(eval(self.expression)) 
            self.expression = result
            self.input_text.set(result)
        except ZeroDivisionError:
            self.expression = ""
            self.input_text.set("Error: Div/0")
            messagebox.showerror("Error", "No se puede dividir por cero")
        except SyntaxError:
            self.expression = ""
            self.input_text.set("Error")
            messagebox.showerror("Error", "Entrada inválida")
        except Exception as e:
            self.expression = ""
            self.input_text.set("Error")
            messagebox.showerror("Error", str(e))

    def btn_sqrt(self):
        try:
            val = float(eval(self.expression))
            if val < 0:
                raise ValueError("Raíz negativa")
            result = str(math.sqrt(val))
            self.expression = result
            self.input_text.set(result)
        except ValueError as e:
            self.expression = ""
            self.input_text.set("Error")
            messagebox.showerror("Error", str(e))
        except Exception:
             self.expression = ""
             self.input_text.set("Error")
             messagebox.showerror("Error", "Entrada inválida para raíz")

if __name__ == "__main__":
    root = tk.Tk()
    app = Calculator(root)
    root.mainloop()
