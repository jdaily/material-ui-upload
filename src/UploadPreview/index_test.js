// -*- mode: rjsx -*-
import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {assert} from 'chai';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core/styles';
import UploadPreview from './index';

Enzyme.configure({ adapter: new Adapter() });

const mountWithTheme = (node) => mount(
    node,
    {
        context: {muiTheme: createMuiTheme()},
        childContextTypes: {muiTheme: PropTypes.object}
    }
);

describe('UploadPreview', () => {
    const newUploadPreview = (props = {}) => mountWithTheme(
            <UploadPreview {...props}/>
    );

    it(
        'always renders a div',
        () => {
            const nodes = newUploadPreview().find('> div');
            assert.equal(nodes.length, 1);
        }
    );
});
