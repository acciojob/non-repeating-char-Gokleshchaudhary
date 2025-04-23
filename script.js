import java.util.HashMap;

public class Main {
    public static Character firstNonRepeatedChar(String str) {
       
        HashMap<Character, Integer> charCount = new HashMap<>();

        for (char c : str.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }

        for (char c : str.toCharArray()) {
            if (charCount.get(c) == 1) {
                return c; 
            }
        }

        return null; 
    }

    public static void main(String[] args) {
       
        System.out.println(firstNonRepeatedChar("aabbcdd")); '
        System.out.println(firstNonRepeatedChar("aabbcc")); 
        System.out.println(firstNonRepeatedChar("")); 
        System.out.println(firstNonRepeatedChar("abcdefg")); 
    }
}