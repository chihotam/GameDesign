function getRandomInteger(lower, upper)
{
	multiplier = upper - (lower - 1);
	random = parseInt(Math.random() * multiplier) + lower;
	return random;
}