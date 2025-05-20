package src;

public class AccountRecord {
    private final String name;
    private final int score;

    public AccountRecord(String name, int score) {
        this.name = name;
        this.score = score;
    }

    public String getName() {
        return name;
    }

    public int getScore() {
        return score;
    }
}
