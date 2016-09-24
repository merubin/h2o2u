package com.geohack.h2o2u;

import com.geohack.h2o2u.config.H2Configuration;
import com.geohack.h2o2u.resources.Dashboard;
import com.geohack.h2o2u.resources.WaterResource_0_1;
import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import io.dropwizard.views.ViewBundle;
import org.knowm.dropwizard.sundial.SundialBundle;
import org.knowm.dropwizard.sundial.SundialConfiguration;
import org.knowm.dropwizard.sundial.tasks.AddCronJobTriggerTask;
import org.knowm.dropwizard.sundial.tasks.AddJobTask;
import org.knowm.dropwizard.sundial.tasks.LockSundialSchedulerTask;
import org.knowm.dropwizard.sundial.tasks.RemoveJobTask;
import org.knowm.dropwizard.sundial.tasks.RemoveJobTriggerTask;
import org.knowm.dropwizard.sundial.tasks.StartJobTask;
import org.knowm.dropwizard.sundial.tasks.StopJobTask;
import org.knowm.dropwizard.sundial.tasks.UnlockSundialSchedulerTask;

//todo move to module
public class Service extends Application<H2Configuration> {
    public static void main(String[] args) throws Exception {
        new Service().run(args);
    }

    @Override
    //todo wtf is this?
    public String getName() {
        return "modeling";
    }

    @Override
    public void initialize(Bootstrap<H2Configuration> bootstrap) {
        //for bootstrapping any commands
        bootstrap.addBundle(new ViewBundle());

        bootstrap.addBundle(new SundialBundle<H2Configuration>() {
            @Override
            public SundialConfiguration getSundialConfiguration(H2Configuration configuration) {
                return configuration.getSundialConfiguration();
            }
        });
    }

    @Override
    public void run(H2Configuration configuration,
            Environment environment) {

        environment.jersey().register(new WaterResource_0_1());
        environment.jersey().register(new Dashboard());

        /* Pre dropwizard 1.0 scheduler resources */
        environment.admin().addTask(new LockSundialSchedulerTask());
        environment.admin().addTask(new UnlockSundialSchedulerTask());
        environment.admin().addTask(new RemoveJobTriggerTask());
        environment.admin().addTask(new AddCronJobTriggerTask());
        environment.admin().addTask(new StartJobTask());
        environment.admin().addTask(new StopJobTask());
        environment.admin().addTask(new RemoveJobTask());
        environment.admin().addTask(new AddJobTask());
    }
}
