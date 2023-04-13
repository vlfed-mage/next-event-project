export const formDate = (date: string) =>
    new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

export const formAddressText = (address: string) => address.replace(', ', '\n');
