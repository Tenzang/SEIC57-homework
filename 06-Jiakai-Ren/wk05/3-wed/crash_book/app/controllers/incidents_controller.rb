class IncidentsController < ApplicationController
    def index
        @incidents = Incident.all
    end

    def show
        @incident = Incident.find params[:id]
    end

    def new
        @incident = Incident.new
    end

    def create
        incident = Incident.create incident_params
        redirect_to incident
    end

    def edit
        @incident = Incident.find params[:id]
    end

    def update
        incident = Incident.find params[:id]
        incident.update incident_params
        redirect_to incident
    end

    def destroy
        incident = Incident.find params[:id]
        incident.destroy
        redirect_to incidents_path
    end

    private
    def incident_params
        params.require(:incident).permit(:flight_number, :date, :description, :image, :death, :injury, :survival, :airline_id)
    end
end