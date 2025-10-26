# LeetCode Daily – 2025-10-26

## 🧠 Problem #2043 – **Simple Bank System**
**Difficulty:** Medium  
**Link:** [LeetCode Problem](https://leetcode.com/problems/simple-bank-system)

---

### 📝 Problem Description

You have been tasked with writing a program for a popular bank that will automate all its incoming transactions (transfer, deposit, and withdraw). The bank has n accounts numbered from 1 to n. The initial balance of each account is stored in a 0-indexed integer array balance, with the (i + 1)th account having an initial balance of balance[i].

Execute all the valid transactions. A transaction is valid if:


	The given account number(s) are between 1 and n, and
	The amount of money withdrawn or transferred from is less than or equal to the balance of the account.


Implement the Bank class:


	Bank(long[] balance) Initializes the object with the 0-indexed integer array balance.
	boolean transfer(int account1, int account2, long money) Transfers money dollars from the account numbered account1 to the account numbered account2. Return true if the transaction was successful, false otherwise.
	boolean deposit(int account, long money) Deposit money dollars into the account numbered account. Return true if the transaction was successful, false otherwise.
	boolean withdraw(int account, long money) Withdraw money dollars from the account numbered account. Return true if the transaction was successful, false otherwise.


 
Example 1:


Input
[&quot;Bank&quot;, &quot;withdraw&quot;, &quot;transfer&quot;, &quot;deposit&quot;, &quot;transfer&quot;, &quot;withdraw&quot;]
[[[10, 100, 20, 50, 30]], [3, 10], [5, 1, 20], [5, 20], [3, 4, 15], [10, 50]]
Output
[null, true, true, true, false, false]

Explanation
Bank bank = new Bank([10, 100, 20, 50, 30]);
bank.withdraw(3, 10);    // return true, account 3 has a balance of $20, so it is valid to withdraw $10.
                         // Account 3 has $20 - $10 = $10.
bank.transfer(5, 1, 20); // return true, account 5 has a balance of $30, so it is valid to transfer $20.
                         // Account 5 has $30 - $20 = $10, and account 1 has $10 + $20 = $30.
bank.deposit(5, 20);     // return true, it is valid to deposit $20 to account 5.
                         // Account 5 has $10 + $20 = $30.
bank.transfer(3, 4, 15); // return false, the current balance of account 3 is $10,
                         // so it is invalid to transfer $15 from it.
bank.withdraw(10, 50);   // return false, it is invalid because account 10 does not exist.


 
Constraints:


	n == balance.length
	1 <= n, account, account1, account2 <= 105
	0 <= balance[i], money <= 1012
	At most 104 calls will be made to each function transfer, deposit, withdraw.

---

### 💡 Solution (Language)

```cpp
// Paste your solution here


---

## AI Generated Solution

Certainly! The "Simple Bank System" problem on LeetCode requires us to simulate a bank system where users can perform various operations like creating an account, depositing money, withdrawing money, and transferring money between accounts.

### Problem Breakdown

1. **Account Creation**: Each account has an ID and a balance.
2. **Operations**:
   - **Deposit**: Increase the balance of an account.
   - **Withdraw**: Decrease the balance of an account if sufficient funds are available.
   - **Transfer**: Move money from one account to another if the source account has enough funds.
3. **Constraints**: 
   - Each operation should ensure the bank's integrity (e.g., cannot withdraw more than the available balance).
   - The account IDs and operations should be valid.

### Solution Approach

1. **Data Structure**: Use a vector (or array) to maintain account balances based on account IDs.
2. **Methods** for deposit, withdraw, and transfer to handle the respective operations.
3. Ensure that each operation checks for the constraints properly before proceeding.

Here's the implementation in C++:

```cpp
#include <vector>
#include <string>

class Bank {
private:
    std::vector<long long> accounts; // To maintain account balances

public:
    // Constructor: initialize bank with accounts
    Bank(std::vector<long long>& balance) {
        accounts = balance; // Copy the initial balances
    }
    
    // Deposit money into an account
    bool deposit(int account, long long money) {
        if (account < 1 || account > accounts.size()) {
            return false; // Invalid account
        }
        accounts[account - 1] += money;
        return true;
    }
    
    // Withdraw money from an account
    bool withdraw(int account, long long money) {
        if (account < 1 || account > accounts.size()) {
            return false; // Invalid account
        }
        if (accounts[account - 1] < money) {
            return false; // Not enough balance
        }
        accounts[account - 1] -= money;
        return true;
    }
    
    // Transfer money from one account to another
    bool transfer(int sender, int receiver, long long money) {
        if (sender < 1 || sender > accounts.size() || receiver < 1 || receiver > accounts.size()) {
            return false; // Invalid accounts
        }
        if (accounts[sender - 1] < money) {
            return false; // Not enough balance
        }
        accounts[sender - 1] -= money; // Withdraw money from sender
        accounts[receiver - 1] += money; // Deposit money to receiver
        return true;
    }
};
```

### Explanation of the Code

1. **Data Structure**: We maintain a `std::vector<long long> accounts` to store the balances of the accounts. This vector is initialized with the account balances provided at the construction of the `Bank` object.

2. **Constructor**: The constructor takes a vector of balances and initializes the `accounts` member variable with it.

3. **Deposit Method**:
   - Checks if the account number is valid (within the range of existing accounts).
   - Adds the specified amount to the corresponding account balance.

4. **Withdraw Method**:
   - Checks if the account number is valid.
   - Validates if the account has enough balance for withdrawal.
   - If valid, subtracts the amount from the account.

5. **Transfer Method**:
   - Checks if both accounts (sender and receiver) are valid.
   - Ensures that the sender has enough balance to cover the transfer.
   - Performs the transfer by subtracting from the sender's account and adding to the receiver's account.

### Complexity Analysis
- **Time Complexity**: All operations (deposit, withdraw, transfer) run in \( O(1) \) time since they involve simple index-based access to the vector.
- **Space Complexity**: The space complexity is \( O(n) \) where \( n \) is the number of accounts since we need to store their balances.

This implementation efficiently simulates a simple bank system while adhering to the problem constraints.