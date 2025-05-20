package src;

import java.io.IOException;


@WebServlet("/addAccount")
public class AccountServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp)
            throws ServletException, IOException {
        String username = req.getParameter("username");
        String password = req.getParameter("password");
        // パスワード強度を数値スコア化（後述のcalculateScore関数を利用）
        int score = PasswordUtil.calculateScore(password);

        // AccountManagerを利用してDBに保存
        AccountManager manager = new AccountManager();
        manager.addAccount(username, password, score);

        // （必要に応じて）レスポンス処理、例: ランキングページへリダイレクト
        // resp.sendRedirect(req.getContextPath() + "/app/ranking");
        resp.setStatus(HttpServletResponse.SC_NO_CONTENT);
    }
}
