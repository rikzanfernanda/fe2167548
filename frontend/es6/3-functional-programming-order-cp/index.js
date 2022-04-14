/**
 * Customisable greeting
 * Buatlah fungsi untuk memformat nama ada sebuah ucapan.
 * Fungsi terebut menerima dua argumen sebagai input
 * Argumen pertama berupa objek user, contoh: let user = { firstName: "John", lastName: "Doe" };
 * Argumen kedua berupa callback untuk memformat nama user.
 *
 */

function customisableGreeting(user, formatCallback) {
  let formattedName = formatCallback(user);

  return `Hi name is ${formattedName}, how are you?`;
}

module.exports = customisableGreeting