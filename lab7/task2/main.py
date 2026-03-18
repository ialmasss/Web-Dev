from models import Animal, Dog, Cat

def main():
    animals = [
        Dog("Rex", 5, "Brown", "Labrador"),
        Cat("Misty", 3, "White", 9),
        Animal("Generic", 2, "Gray")
    ]

    for animal in animals:
        print(animal)           
        print(animal.eat())     
        print(animal.speak())   
        print("-" * 20)

if __name__ == "__main__":
    main()