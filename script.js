import java.util.HashMap;

public class Main {
    public static Character firstNonRepeatedChar(String str) {
        // Step 1: Create a HashMap to store character counts
        HashMap<Character, Integer> charCount = new HashMap<>();

        // Step 2: Count the characters
        for (char c : str.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }

        // Step 3: Find the first non-repeated character
        for (char c : str.toCharArray()) {
            if (charCount.get(c) == 1) {
                return c; // Return the first non-repeated character
            }
        }

        return null; // If no non-repeated character is found
    }

    public static void main(String[] args) {
        // Test cases
        System.out.println(firstNonRepeatedChar("aabbcdd")); // Output: 'c'
        System.out.println(firstNonRepeatedChar("aabbcc")); // Output: null
        System.out.println(firstNonRepeatedChar("")); // Output: null
        System.out.println(firstNonRepeatedChar("abcdefg")); // Output: 'a'
    }
}