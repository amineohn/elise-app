const TableWeight = () => {
    return (
        <div className="box">
            <table className="type">
                <tr className="font-weight: 500;">
                    <td>Type</td>
                    <td>Matière</td>
                    <td>KG</td>
                </tr>
                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">PET</td>
                    <td onClick="">
                        5kg{" "}
                        <button className="valid" type="submit">
                            <i class="fas fa-check edit"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">Papier</td>
                    <td onClick="">
                        105kg{" "}
                        <button className="valid gray" type="submit">
                            <i class="fas fa-pencil-alt edit"></i>
                        </button>
                    </td>
                </tr>
                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">Canettes</td>
                    <td onClick="">20kg</td>
                </tr>

                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">Fer</td>
                    <td onClick="">65kg</td>
                </tr>
                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">Conserve</td>
                    <td onClick="">35kg</td>
                </tr>
                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">Conserve</td>
                    <td onClick="">35kg</td>
                </tr>
                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">Conserve</td>
                    <td onClick="">35kg</td>
                </tr>
                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">Conserve</td>
                    <td onClick="">35kg</td>
                </tr>
                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">Conserve</td>
                    <td onClick="">35kg</td>
                </tr>
                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">Conserve</td>
                    <td onClick="">35kg</td>
                </tr>
                <tr>
                    <td onClick="">Caisse</td>
                    <td onClick="">Conserve</td>
                    <td onClick="">35kg</td>
                </tr>
            </table>
        </div>
    )
}
export default TableWeight;