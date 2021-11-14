import React from 'react';

import Card, { CardVariant } from '../components/Card';
import EventsExample from '../components/EventsExample';

function AddionalPage() {
    return (
        <div>
            <EventsExample />
            <Card width="200px" height="200px" variant={CardVariant.outlined}>
                <button>Кнопка</button>
            </Card>
        </div>
    );
}

export default AddionalPage;
