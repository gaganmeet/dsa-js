package codechef;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintStream;
import java.util.*;

public class cortsent {

    static final File ip = new File("./codeforces/input.txt");
    static final File op = new File("./codeforces/output.txt");
    static InputReader in;

    static {
        try {
            System.setOut(new PrintStream(op));
            System.setIn(new FileInputStream(ip));
        } catch (Exception e) {
        }

        in = new InputReader(System.in);
    }

    /***
     * Write your code in this function! Input: Use InputReader "in" for reading
     * data. Output: Use System.out.println() to write output to file
     */

    private static void solve(int t1) {
        int k = in.readInt();
        String[] strarr = new String[k];
        for(int i=0;i<k;i++){
            strarr[i] = in.next();
        }
        boolean flag = false;
        for(int i=0;i<strarr.length;i++){
            int state = 0;
            if(strarr[i].charAt(0)>=97&&strarr[i].charAt(0)<=109){
                state = 1;
            }
            if(strarr[i].charAt(0)>=78&&strarr[i].charAt(i)<=90){
                state = 2;
            }
            if(state==0){
                flag = true;
                break;
            }
            for(int j=1;j<strarr[i].length();j++){
                if(state==1&&(strarr[i].charAt(j)<97||strarr[i].charAt(j)>109)){
                    flag = true;
                    break;
                }
                if(state==2&&(strarr[i].charAt(j)<78||strarr[i].charAt(j)>90)){
                    flag = true;
                    break;
                }
            }
        }
        if(flag)
            System.out.println("NO");
        else
            System.out.println("YES");
    }

    public static void main(String[] args) throws FileNotFoundException {
        int t = in.readInt();
        int t1 = 1;
        while (t1 <= t) {
            solve(t1);
            t1++;
        }
    }

    /** A class for Fast Input */
    static class InputReader {
        private InputStream stream;
        private byte[] buf = new byte[1024];
        private int curChar;
        private int numChars;
        private SpaceCharFilter filter;

        public InputReader(InputStream stream) {
            this.stream = stream;
        }

        public int read() {
            if (numChars == -1) throw new InputMismatchException();
            if (curChar >= numChars) {
                curChar = 0;
                try {
                    numChars = stream.read(buf);
                } catch (IOException e) {
                    throw new InputMismatchException();
                }
                if (numChars <= 0) return -1;
            }
            return buf[curChar++];
        }

        public int readInt() {
            int c = read();
            while (isSpaceChar(c)) c = read();
            int sgn = 1;
            if (c == '-') {
                sgn = -1;
                c = read();
            }
            int res = 0;
            do {
                if (c < '0' || c > '9') throw new InputMismatchException();
                res *= 10;
                res += c - '0';
                c = read();
            } while (!isSpaceChar(c));
            return res * sgn;
        }

        public String readString() {
            int c = read();
            while (isSpaceChar(c)) c = read();
            StringBuilder res = new StringBuilder();
            do {
                res.appendCodePoint(c);
                c = read();
            } while (!isSpaceChar(c));
            return res.toString();
        }

        public boolean isSpaceChar(int c) {
            if (filter != null) return filter.isSpaceChar(c);
            return c == ' ' || c == '\n' || c == '\r' || c == '\t' || c == -1;
        }

        public String next() {
            return readString();
        }
    }

    public interface SpaceCharFilter {
        public boolean isSpaceChar(int ch);
    }
}
