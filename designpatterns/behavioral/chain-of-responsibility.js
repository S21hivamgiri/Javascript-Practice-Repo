const createApprover = (limit, title, next = null) => ({
  handle: (amount) => {
    if (amount <= limit) {
      return `${title} will approve the $${amount} expense.`;
    }
    if (next) {
      return next.handle(amount); // Pass it up the chain
    }
    return `Expense of $${amount} exceeds all limits and was denied.`;
  },
});

// Build the chain: Team Lead ($100 limit) -> Manager ($1,000 limit) -> Director ($5,000 limit)
const director = createApprover(5000, "Director");
const manager = createApprover(1000, "Manager", director);
const teamLead = createApprover(100, "Team Lead", manager);

// Usage:
console.log(teamLead.handle(50));
console.log(teamLead.handle(450));
console.log(teamLead.handle(3000));
console.log(teamLead.handle(10000));
