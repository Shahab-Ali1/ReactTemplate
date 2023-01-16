import * as React from 'react';
import "jqwidgets-scripts/jqwidgets/styles/jqx.base.css";
import "jqwidgets-scripts/jqwidgets/styles/jqx.material-purple.css";
import JqxGrid, { jqx } from 'jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid';
class GridDemo extends React.PureComponent {
    constructor(props) {
        super(props);
        const source =
        {
            datatype: 'json',
            localdata: [
                { firstname: "Shahab", lastname: "Ali", productname: "None", quantity: 0, price: 0, total: 0 }
            ],
            datafields: [
                { name: 'firstname', type: 'string' },
                { name: 'lastname', type: 'string' },
                { name: 'productname', type: 'string' },
                { name: 'quantity', type: 'number' },
                { name: 'price', type: 'number' },
                { name: 'total', type: 'number' }
            ],
        };
        this.state = {
            columns: [
                { text: 'Name', datafield: 'firstname', width: "20%" },
                { text: 'Last Name', datafield: 'lastname', width: "20%" },
                { text: 'Product', datafield: 'productname', width: "20%" },
                { text: 'Quantity', datafield: 'quantity', width: "10%", cellsalign: 'right' },
                { text: 'Unit Price', datafield: 'price', width: "10%", cellsalign: 'right', cellsformat: 'c2' },
                { text: 'Total', datafield: 'total', cellsalign: 'right', cellsformat: 'c2', width: "20%" }
            ],
            source: new jqx.dataAdapter(source)
        }
        this.myGrid = React.createRef(JqxGrid);
    }
    render() {
        return (
            <JqxGrid
                ref={this.myGrid}
                width={'80%'}
                height={300}
                source={this.state.source}
                columns={this.state.columns}
                columnsresize={true} />
        );
    }
}
export default GridDemo;