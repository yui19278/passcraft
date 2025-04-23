import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class AccountManager {
    private static final String DB_URL = "jdbc:sqlite:accounts.db";

    public void addAccount(String accountname, String password, Integer strength) {
        String sql = "INSERT OR REPLACE INTO accounts(accountname, password, strength) VALUES(?, ?, ?)";


        try (Connection conn = DriverManager.getConnection(DB_URL);
             PreparedStatement pstmt = conn.prepareStatement(sql)) {

            pstmt.setString(1, accountname);
            pstmt.setString(2, password);
            pstmt.setInt(3, strength);

            pstmt.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void showAccount(String accountname) {
        String sql = "SELECT accountname, password, strength FROM accounts WHERE accountname = ?";
    
        try (Connection conn = DriverManager.getConnection(DB_URL);
            PreparedStatement pstmt = conn.prepareStatement(sql)) {
    
            pstmt.setString(1, accountname);
            ResultSet rs = pstmt.executeQuery();
    
            if (rs.next()) {
                System.out.println("--------------------------");
                System.out.println("Accountname: " + rs.getString("accountname"));
                System.out.println("Password:    " + rs.getString("password"));
                System.out.println("Strength:    " + rs.getString("strength"));
                System.out.println("--------------------------");
            } else {
                System.out.println( accountname + " は見つかりませんでした。");
            }
    
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    


    public void showAccounts() {
        String sql = "SELECT accountname, password, strength FROM accounts";

        try (Connection conn = DriverManager.getConnection(DB_URL);
            Statement stmt = conn.createStatement();
            ResultSet rs = stmt.executeQuery(sql)) {

            while (rs.next()) {
                System.out.println("--------------------------");
                System.out.println("Accountname: " + rs.getString("accountname"));
                System.out.println("Password: " + rs.getString("password"));
                System.out.println("Strength: " + rs.getString("strength"));
                System.out.println("--------------------------");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }


    public void deleteAccount(String accountname) {
        String sql = "DELETE FROM accounts WHERE accountname = ?";
    
        try (Connection conn = DriverManager.getConnection(DB_URL);
            PreparedStatement pstmt = conn.prepareStatement(sql)) {
    
            pstmt.setString(1, accountname);
            pstmt.executeUpdate();
    
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
