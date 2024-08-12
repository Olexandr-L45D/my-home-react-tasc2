import css from "./TransactionHistory.module.css"
import TransactionItem from "../TransactionItem/TransactionItem"

export default function TransactionHistory({ items }) {
    return (
        <table className={css.container}>
            <thead className={css.tables}>
                <tr className={css.tabl}>
                    <th className={css.title}>Type</th>
                    <th className={css.title}>Amount</th>
                    <th className={css.title}>Currency</th>
                </tr>
            </thead>
            <tbody className={css.list}>
                {items.map((ite) => {
                    return (
                        <tr className={css.item} key={ite.id}>
                            <TransactionItem item={ite} />
                        </tr>);
                })}</tbody>
        </table>
    );
}

