// A warehouse stores different types of inventory data in a single list.

// Only valid product quantities should be processed.

// For each valid quantity:

// * quantities less than 50 should be labeled "restock"
// * quantities from 50 to 100 should be labeled "ok"
// * quantities greater than 100 should be labeled "overstock"

// Return a new list containing only the labels.

// ⸻

// Constraints

// * The input will always be an array
// * Valid quantities are numbers greater than or equal to 0
// * Ignore all non-number values
// * Preserve original order

// Examples: 
// checkInventory([20, 75, 150]) ➞ ["restock", "ok", "overstock"]

// checkInventory([50, "box", 101]) ➞ ["ok", "overstock"]

// checkInventory([-5, 10, null, 200]) ➞ ["restock", "overstock"]

// Input: 
    // Inventory data in a single list

// Output: 
    // valid quantities labeled, "restock", 'ok', 'overstock'

// Method: 
    // Mapping

// Approach: 
    // First I take the list of inventory
    // Then I filter to keep the values that check the constraint
    // Then I label the values based on their value
    // Then I return the list 

function checkInventory(items) {
  return items
        .filter(item => typeof item === 'number' && item >= 0)
        .map(qnty => {
            if (qnty > 100){return 'overstock'}
            if ( qnty >= 50){return 'ok'}
            {return 'restock'}
        })
}