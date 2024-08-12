import css from "./TransactionItem.module.css"

export default function TransactionItem({
    item: { type, amount, currency } },
) {
    return (
        <>
            <td className={css.titleText}>{type}</td>
            <td className={css.itemTextdata}>{amount}</td>
            <td className={css.itemText}>{currency}</td>
        </>
    );
}

