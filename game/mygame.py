import random
def roll_dice():
    return random.randint(1, 6)
def main():
    print("Welcome to the Guessing Game!")
    print("Guess the number between 1 and 6.")
    guess = int(input("Your guess: "))
    dice_roll = roll_dice()
    if guess == dice_roll:
        print("Congratulations! You guessed correctly.")
    else:
        print(f"Sorry, the correct number was {dice_roll}.")
if __name__ == "__main__":
    main()