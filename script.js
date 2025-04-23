import java.util.HashMap;
import java.util.Scanner;

public class Main {
    public static Character firstNonRepeatedChar(String str) {
        HashMap<Character, Integer> charCount = new HashMap<>();

        // Step 1: Count the characters
        for (char c : str.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }

        // Step 2: Find the first non-repeated character
        for (char c : str.toCharArray()) {
            if (charCount.get(c) == 1) {
                return c; // Return the first non-repeated character
            }
        }

        return null; // If no non-repeated character is found
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine(); // Get input from the user

        Character result = firstNonRepeatedChar(input);
        if (result != null) {
            System.out.println("First non-repeated character: " + result);
        } else {
            System.out.println("No non-repeated character found.");
        }

        scanner.close(); // Close the scanner
    }
}