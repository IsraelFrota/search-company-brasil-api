export function formatCnpj(cnpj: string): string {
	const digits = cnpj.replace(/\D/g, "");
	return digits.replace(
		/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
		"$1.$2.$3/$4-$5"
	);
}

export function maskCnpj(value: string): string {
	const digits = value.replace(/\D/g, "").slice(0, 14);
	return digits.replace(
		/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
		"$1.$2.$3/$4-$5"
	);
}

export function formatCurrency(value: number): string {
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}

export function formatDate(dateStr: string | null): string {
	if (!dateStr) return "—";
	const cleaned = dateStr.replace(/\D/g, "");
	if (cleaned.length === 8) {
		const day = cleaned.slice(0, 2);
		const month = cleaned.slice(2, 4);
		const year = cleaned.slice(4, 8);
		return `${day}/${month}/${year}`;
	}
	return dateStr;
}

export function formatPhone(phone: string | null): string {
	if (!phone) return "—";

	const numbers = phone.replace(/\D/g, "");

	switch (numbers.length) {
		case 10:
			return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 6)}-${numbers.slice(6)}`;

		case 11:
			return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;

		default:
			return phone;
	}
}