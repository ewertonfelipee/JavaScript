const firstName = "Ewerton";
print(firstName.length);

print(firstName.substring(0,4));

print(firstName.toUpperCase());

print(firstName.toLowerCase());

const fullName = "Ewerton Felipe";

print(fullName.slice(0,9));

const lastName = "Silva";

const nameFull = fullName.replace("Felipe", lastName);
print(nameFull);

const text = "      hello       ";
print("Before trim():" + text);
print("After trim(): " + text.trim());

print(fullName.split("  "));