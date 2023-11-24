const byteSize = (str) => {
  // write your code here
	// Use TextEncoder to encode the string to bytes
    const encoder = new TextEncoder();
    const bytes = encoder.encode(str);

    // Return the length of the encoded bytes array
    return bytes.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
