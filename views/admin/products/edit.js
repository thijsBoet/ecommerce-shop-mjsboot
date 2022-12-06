const layout = require('../layout');
const { getError } = require('../../helpers');

module.exports = ({ product }) => {
	return layout({
		content: `
        <form method="post">
            <input name="title" type="text" value=${product.title}/>
            <input name="price" type="number" value=${product.price}/>
            <input name="image" type="image" src="" alt=""/>
            <button>Submit</button>
        </form>
    `,
	});
};
