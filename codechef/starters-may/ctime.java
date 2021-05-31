package codechef;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintStream;
import java.util.*;

public class ctime {

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

        int n = Integer.parseInt(in.next());
        int k = Integer.parseInt(in.next());
        int f = Integer.parseInt(in.next());
        int[][] intervals = new int[n][2];
        for(int i=0;i<n;i++){
            intervals[i][0] = in.readInt();
            intervals[i][1] = in.readInt();
        }
        Arrays.sort(intervals, Comparator.comparingDouble(o -> o[0]));
        LinkedList<int[]> merged = new LinkedList<>();
        for( int[] interval: intervals){
            if(merged.isEmpty() || merged.getLast()[1] < interval[0]){
                merged.add(interval);
            }
            else{
                merged.getLast()[1] = Math.max(merged.getLast()[1],interval[1]);
            }
        }
        Iterator<int[]> itr=merged.iterator();
        int cur = 0;

        int count = 0;
        while(itr.hasNext()){
            int[] temp = itr.next();
                count+= temp[0] - cur;
                cur = temp[1];
        }
        count+=(f-cur);

        if(count>=k)
            System.out.println("YES");
        else
            System.out.println("NO");

    }

    public static void main(String[] args) throws FileNotFoundException {
        int t = Integer.parseInt(in.next());
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
