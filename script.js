import java.util.HashMap;

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
        System.out.println(firstNonRepeatedChar("aabbcdd")); // Output: 'c'
        System.out.println(firstNonRepeatedChar("aabbcc")); // Output: null
    }
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
