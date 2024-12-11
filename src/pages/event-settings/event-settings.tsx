import React from 'react'
import Layout from '../../components/layout'
import Tabs from '@/components/ui/tabs';
import General from '@/components/tabs-settings/general';
import Appearance from '@/components/tabs-settings/appearance';
import Slideshow from '@/components/tabs-settings/slideshow';
import Moderation from '@/components/tabs-settings/moderation';
import Collaborators from '@/components/tabs-settings/collaborators';

const tabData = [
    {
      label: 'General',
      content: <General />,
    },
    {
      label: 'Appearance',
      content: <Appearance />,
    },
    {
      label: 'Slideshow',
      content: <Slideshow />,
    },
    {
      label: 'Moderation',
      content: <Moderation />,
    },
    {
      label: 'Collaborators',
      content: <Collaborators />,
    },
  ];

const EventSettings = () => {
  return (
    <Layout title='Event Settings'>
        <div>
            <Tabs tabs={tabData} />
        </div>
    </Layout>
  )
}

export default EventSettings