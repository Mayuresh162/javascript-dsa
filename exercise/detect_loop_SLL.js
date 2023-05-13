// flag based approach by modifying SLL data structure
function detectLoop(h)
{
    while (h != null)
    {
          
        // If this node is already traverse
        // it means there is a cycle
        // (Because you we encountering the
        // node for the second time).
        if (h.flag == 1)
            return true;
  
        // If we are seeing the node for
        // the first time, mark its flag as 1
        h.flag = 1;
  
        h = h.next;
    }
    return false;
}

// hashing approach
function detectLoop(h) {
    var s = new Set();
    while (h != null) {
        // If we have already has this node
        // in hashmap it means their is a cycle
        // (Because you we encountering the
        // node second time).
        if (s.has(h))
            return true;

        // If we are seeing the node for
        // the first time, insert it in hash
        s.add(h);

        h = h.next;
    }

    return false;
}

// Floyd’s Cycle-Finding Algorithm
// Approach: This is the fastest method and has been described below:  

// Traverse linked list using two pointers.
// Move one pointer(slow_p) by one and another pointer(fast_p) by two.
// If these pointers meet at the same node then there is a loop. If pointers do not meet then linked list doesn’t have a loop.
function detectLoop()
{
    let slow_p = head, fast_p = head;
    let flag = 0;
     
    while (slow_p != null && fast_p != null &&
           fast_p.next != null)
    {
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
        if (slow_p == fast_p)
        {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        document.write("Loop found<br>");
    else
        document.write("Loop not found<br>");
}

// Marking visited nodes without modifying the linked list data structure

function detectLoop(head)
{
     
    // Create a temporary node
    let temp = new Node();
    while (head != null)
    {
         
        // This condition is for the case
        // when there is no loop
        if (head.next == null)
        {
            return false;
        }
 
        // Check if next is already
        // pointing to temp
        if (head.next == temp)
        {
            return true;
        }
 
        // Store the pointer to the next node
        // in order to get to it in the next step
        let nex = head.next;
 
        // Make next point to temp
        head.next = temp;
 
        // Get to the next node in the list
        head = nex;
    }
 
    return false;
}

// store length 
function distance(first, last)
{
 
    /*counts no of nodes between first and last*/
    let counter = 0;
    let curr;
    curr = first;
     
    while (curr != last)
    {
        counter += 1;
        curr = curr.next;
    }
    return counter + 1;
}
 
// Function to detect first node of loop
// in a linked list that may contain loop
function detectLoop(head)
{
 
    // Create a temporary node
    let temp = new Node();
    let first, last;
     
    /*first always points to head*/
    first = head;
     
    /*last pointer initially points to head*/
    last = head;
     
    /*current_length stores no of nodes
    between current position of first and last*/
    let current_length = 0;
     
    /*current_length stores no of nodes between
    previous position of first and last*/
    let prev_length = -1;
     
    while (current_length > prev_length &&
           last != null)
    {
     
        // Set prev_length to current length
        // then update the current length
        prev_length = current_length;
         
        // Distance is calculated
        current_length = distance(first, last);
         
        // Last node points the next node
        last = last.next;
    }
     
    if (last == null)
    {
        return false;
    }
    else
    {
        return true;
    }
}

// assign a new value to data of node in the linked list which is not in the range given
function detectLoop(h)
{
    // If the head is null we will return false
    if (head == null)
        return false;
    else
    {
          
        // Traversing the linked list
        // for detecting loop
        while (head != null)
        {
              
            // If loop found
            if (head.data == -1)
            {
                return true;
            }
  
            // Changing the data of visited node to any
            // value which is outside th given range
            // here it is supposed the given range is (1
            // <= Data on Node <= 10^3)
            else
            {
                head.data = -1;
                head = head.next;
            }
        }
          
        // If loop not found return false
        return false;
    }
}